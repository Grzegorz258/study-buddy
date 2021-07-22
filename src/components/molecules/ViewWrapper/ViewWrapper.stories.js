import { ViewWrapper } from './ViewWrapper';

export default {
  title: 'Components/Molecules/ViewWrapper',
  component: ViewWrapper,
};

const Template = (args) => <ViewWrapper {...args} />;

export const Default = Template.bind({});

export const BiggerBorderRadius = Template.bind({});
BiggerBorderRadius.args = {
  style: {
    'border-radius': '50px',
  },
};

export const BiggerBoxShadow = Template.bind({});
BiggerBoxShadow.args = {
  style: {
    'box-shadow': '0px 0px 25px rgba(0, 0, 0, 0.3)',
  },
};
