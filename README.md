# XRP Sender

A simple TypeScript script to send XRP on the XRP Ledger (XRPL) mainnet using the official [xrpl JavaScript library](https://js.xrpl.org/).

This tool allows users to securely send XRP by prompting for transaction details and confirming before submission. It's designed for developers and users familiar with the XRPL ecosystem.

## Table of Contents

- [Features](#features)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Usage](#usage)
- [How It Works](#how-it-works)
- [Security Warning](#security-warning)
- [Dependencies](#dependencies)
- [Contributing](#contributing)
- [License](#license)

## Features

- Interactive command-line interface for sending XRP
- Prompts for amount, destination address, and seed phrase
- Transaction summary and confirmation before submission
- Uses the official XRPL JavaScript library for reliable integration
- Supports XRPL mainnet transactions

## Prerequisites

- Node.js (version 14 or higher) - [Download here](https://nodejs.org/)
- npm (comes with Node.js)
- Basic knowledge of XRP and XRPL - see [XRPL Documentation](https://xrpl.org/)

## Installation

1. Clone this repository:
   ```
   git clone https://github.com/yourusername/SendXRP.git
   cd SendXRP
   ```

2. Install dependencies:
   ```
   npm install
   ```

## Usage

Run the script with:
```
npm start
```

The script will interactively prompt you for:

1. **Amount of XRP to send**: Enter the amount in XRP (e.g., 10.5)
2. **Destination address**: The XRPL address to send XRP to (must be a valid XRP Ledger address)
3. **Your seed phrase**: Your wallet's secret seed (keep this secure!)

After entering the details, the script will display a transaction summary including:
- Source address
- Destination address
- Amount
- Estimated fee

Confirm the transaction to submit it to the XRPL mainnet.

## Example

Here's a sample run of the script (with sensitive information masked for security):

```
C:\Users\Handy\Documents\GitHub\SendXRP>npm start

> xrp-sender@1.0.0 start
> ts-node sendXRP.ts

Connected to XRPL mainnet.
Enter the amount of XRP to send: 1
Enter the destination address: rGe24P5aZckhpfsXSsSwRa68pgtaio4yZw
Enter your seed phrase: ******************************

--- Transaction Summary ---
From: r3VekZUS7MfnkWiJ131TsGqmKZwvqAyisX
To: rGe24P5aZckhpfsXSsSwRa68pgtaio4yZw
Amount: 1 XRP
Fee: 0.000012 XRP
Sequence: 92099920
---------------------------
Do you want to submit this transaction? (y/n): y
Transaction submitted.
Result: {
  id: 9,
  result: {
    accepted: true,
    account_sequence_available: 92099921,
    account_sequence_next: 92099921,
    applied: true,
    broadcast: true,
    engine_result: 'tesSUCCESS',
    engine_result_code: 0,
    engine_result_message: 'The transaction was applied. Only final in a validated ledger.',
    kept: true,
    open_ledger_cost: '10',
    queued: false,
    tx_blob: '120000220000000024057D5550201B061400706140000000000F424068400000000000000C7321EDBC6BBDA17EF13EA9211ECCD146670A6049B3D55649F739A56DBBD2B59CB7920574402D8EE1D0D70B17838EECEDBBA575AE79E8CDF6765847C3DE4ABD06235E52376D71CD11947D16E42A6F57A0FEC4D95E6DFABBD9F52694BC1C667F79BDBD8E1A03811452340A529B506C4B630ADE0EEE8DA51654A416288314ABA521D9DCB3602C15AE7CDA813AA9CA790E8B3D',
    tx_json: {
      Account: 'r3VekZUS7MfnkWiJ131TsGqmKZwvqAyisX',
      Amount: '1000000',
      Destination: 'rGe24P5aZckhpfsXSsSwRa68pgtaio4yZw',
      Fee: '12',
      Flags: 0,
      LastLedgerSequence: 101974128,
      Sequence: 92099920,
      SigningPubKey: 'EDBC6BBDA17EF13EA9211ECCD146670A6049B3D55649F739A56DBBD2B59CB79205',
      TransactionType: 'Payment',
      TxnSignature: '2D8EE1D0D70B17838EECEDBBA575AE79E8CDF6765847C3DE4ABD06235E52376D71CD11947D16E42A6F57A0FEC4D95E6DFABBD9F52694BC1C667F79BDBD8E1A03',
      hash: '649A36D079122667F738A2159F3FAEBC655F97AF59226E49941554F10051E552'
    },
    validated_ledger_index: 101974110
  },
  type: 'response'
}
```

This example shows a successful transaction submission. The `engine_result` of `'tesSUCCESS'` indicates the transaction was applied successfully.

## How It Works

This script uses the [xrpl JavaScript library](https://js.xrpl.org/) to interact with the XRP Ledger. Here's a high-level overview:

1. **Wallet Connection**: Connects to the XRPL mainnet using a WebSocket connection.
2. **Transaction Preparation**: Creates a [Payment transaction](https://xrpl.org/payment.html) with the provided details.
3. **Signing**: Signs the transaction using your seed phrase.
4. **Submission**: Submits the signed transaction to the ledger.
5. **Confirmation**: Waits for transaction validation and provides the result.

For more details on XRPL transactions, see the [Transaction Types documentation](https://xrpl.org/transaction-types.html) and [Send XRP guide](https://xrpl.org/send-xrp.html).

## Security Warning

**This script interacts with real XRP on the mainnet. Use at your own risk!**

- Ensure you have sufficient XRP for the transaction amount plus fees (typically 0.00001 XRP).
- Double-check all inputs, especially the destination address and amount.
- Never share your seed phrase with anyone.
- Test with small amounts first.
- For security best practices, refer to the [XRPL Security Best Practices](https://xrpl.org/security.html).

## Dependencies

- [xrpl](https://www.npmjs.com/package/xrpl): Official XRPL JavaScript library for interacting with the XRP Ledger
- [readline-sync](https://www.npmjs.com/package/readline-sync): Synchronous readline for Node.js, used for secure input masking
- [@types/node](https://www.npmjs.com/package/@types/node): TypeScript type definitions for Node.js
- [ts-node](https://www.npmjs.com/package/ts-node): TypeScript execution and REPL for Node.js

## Contributing

Contributions are welcome! Please:

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

For issues or feature requests, please use the [GitHub Issues](https://github.com/yourusername/SendXRP/issues) page.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

*Built with the [XRP Ledger](https://xrpl.org/)*