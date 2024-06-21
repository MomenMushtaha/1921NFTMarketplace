// Exporting an object that defines the schema for a transaction
export default {
  // The internal name of the schema
  name: 'transactions',

  // The display name of the schema
  title: 'Transactions',

  // The type of the schema, which is a document in this case
  type: 'document',

  // The fields that the schema contains
  fields: [
    {
      // The internal name of the field
      name: 'txHash',

      // The display name of the field
      title: 'Transaction Hash',

      // The type of the field, which is a string in this case
      type: 'string',
    },
    {
      // The internal name of the field
      name: 'fromAddress',

      // The display name of the field
      title: 'From (Wallet Address)',

      // The type of the field, which is a string in this case
      type: 'string',
    },
    {
      // The internal name of the field
      name: 'toAddress',

      // The display name of the field
      title: 'To (Wallet Address)',

      // The type of the field, which is a string in this case
      type: 'string',
    },
    {
      // The internal name of the field
      name: 'amount',

      // The display name of the field
      title: 'Amount',

      // The type of the field, which is a number in this case
      type: 'number',
    },
    {
      // The internal name of the field
      name: 'cImg',

      // The display name of the field
      title: 'NFT Image',

      // The type of the field, which is an image in this case
      type: 'image',

      // The options for the field
      options: {
        // This option enables the hotspot feature for the image
        hotspot: true,
      }
    },
    {
      // The internal name of the field
      name: 'cName',

      // The display name of the field
      title: 'Nft Name',

      // The type of the field, which is a string in this case
      type: 'string',
    },
    {
      // The internal name of the field
      name: 'timestamp',

      // The display name of the field
      title: 'Timestamp',

      // The type of the field, which is a datetime in this case
      type: 'datetime',
    },
  ],
}