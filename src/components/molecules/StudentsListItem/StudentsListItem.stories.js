import StudentsListItem from './StudentsListItem';

export default {
  title: 'Components/Molecules/StudentsListItem',
  component: StudentsListItem,
};

const Template = (args) => <StudentsListItem {...args} />;

export const GoodGrades = Template.bind({});
GoodGrades.args = {
  userData: {
    name: 'Adam Romański',
    attendance: '25%',
    average: '4',
  },
};

export const MediumGrades = Template.bind({});
MediumGrades.args = {
  userData: {
    name: 'Adam Romański',
    attendance: '25%',
    average: '3',
  },
};

export const BadGrades = Template.bind({});
BadGrades.args = {
  userData: {
    name: 'Adam Romański',
    attendance: '25%',
    average: '2',
  },
};

export const NoAverage = Template.bind({});
NoAverage.args = {
  userData: {
    name: 'Adam Romański',
    attendance: '25%',
    average: null,
  },
};
