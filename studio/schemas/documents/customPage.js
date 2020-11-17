import { RiPagesLine } from 'react-icons/ri';

export default {
  name: 'customPage',
  type: 'document',
  title: 'Custom Pages',
  icon: RiPagesLine,
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title',
      validation: (Rule) => Rule.required().min(3).max(100),
    },
    {
      name: 'slug',
      type: 'slug',
      title: 'Slug',
      description: 'Max length 96 characters',
      validation: (Rule) => Rule.required(),
      options: {
        source: 'title',
        maxLength: 96,
      },
    },
    {
      title: 'Brief description (Optional)',
      name: 'description',
      type: 'text',
      rows: 1,
      description: 'Max length 300 characters',
      validation: (Rule) => Rule.min(20).max(300),
    },
    {
      title: 'More Info',
      name: 'mainContent',
      type: 'array',
      of: [{ type: 'block' }, { type: 'inlineImage' }],
      description: 'Text content for the hidden "More Info" section',
      validation: (Rule) => Rule.required(),
    },
    {
      title: 'Feature Image',
      name: 'moreInfoImage',
      type: 'miscImage',
      description:
        'OPTIONAL: Image to be highlighted in the "more info" section.',
    },
  ],
};
