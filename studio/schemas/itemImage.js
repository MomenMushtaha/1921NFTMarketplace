// Exporting an object that defines the schema for an item image
export default {
    // The internal name of the schema
    name: 'itemImage',

    // The display name of the schema
    title: 'Item Image',

    // The type of the schema, which is an image in this case
    type: 'image',

    // The fields that the schema contains
    fields: [
        {
            // The internal name of the field
            name: 'caption',

            // The display name of the field
            title: 'Caption',

            // The type of the field, which is a string in this case
            type: 'string',

            // The options for the field
            options: {
                // This option highlights the field in the UI
                isHightLight: true
            }
        },
        {
            // The internal name of the field
            name: 'price',

            // The display name of the field
            title: 'Price',

            // The type of the field, which is a string in this case
            type: 'string',
        },
    ],

    // The options for the schema
    options: {
        // This option enables the hotspot feature for the image
        hotspot: true,
    }
}