import * as xrpl from 'xrpl';
import * as readlineSync from 'readline-sync';

function ask(question: string): string {
  return readlineSync.question(question);
}

function askMasked(question: string): string {
  return readlineSync.question(question, { hideEchoBack: true });
}

async function main() {
  try {
    // Connect to XRPL mainnet via xrplcluster
    const client = new xrpl.Client('wss://xrplcluster.com/');
    await client.connect();
    console.log('Connected to XRPL mainnet.');

    // Step 1: Prompt for amount
    const amountXRP = ask('Enter the amount of XRP to send: ');
    const amountDrops = (parseFloat(amountXRP) * 1000000).toString();

    // Step 2: Prompt for destination
    const destination = ask('Enter the destination address: ');

    // Step 3: Prompt for seed phrase
    const seed = askMasked('Enter your seed phrase: ');

    // Create wallet from seed
    const wallet = xrpl.Wallet.fromSeed(seed);

    // Prepare transaction
    const tx: xrpl.Payment = {
      TransactionType: 'Payment',
      Account: wallet.address,
      Destination: destination,
      Amount: amountDrops,
    };

    // Autofill transaction (fee, sequence, etc.)
    const prepared = await client.autofill(tx);

    // Summary
    const feeXRP = (parseInt(prepared.Fee!) / 1000000).toFixed(6);
    console.log('\n--- Transaction Summary ---');
    console.log(`From: ${wallet.address}`);
    console.log(`To: ${destination}`);
    console.log(`Amount: ${amountXRP} XRP`);
    console.log(`Fee: ${feeXRP} XRP`);
    console.log(`Sequence: ${prepared.Sequence}`);
    console.log('---------------------------');

    // Confirmation
    const confirm = ask('Do you want to submit this transaction? (y/n): ');
    if (confirm.toLowerCase() !== 'y') {
      console.log('Transaction cancelled.');
      await client.disconnect();
      return;
    }

    // Sign and submit
    const signed = wallet.sign(prepared);
    const result = await client.submit(signed.tx_blob);

    console.log('Transaction submitted.');
    console.log('Result:', result);

    await client.disconnect();
  } catch (error) {
    console.error('Error:', error);
    process.stdin.setRawMode(false);
    process.stdin.pause();
  }
}

main();