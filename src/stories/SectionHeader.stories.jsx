import SectionHeader from "../components/SectionHeader";

export default {
  title: "Component/SectionHeader",
  component: SectionHeader,
  argTypes: {
    children: { controls: "text" },
    leadingIcon: { controls: "text" },
  },
};

const Template = (args) => <SectionHeader {...args} />;

export const WithLeadingButton = Template.bind({});
WithLeadingButton.args = {
  children: "한식",
  leadingIcon: "<",
};

export const WithoutLeadingButton = Template.bind({});
WithoutLeadingButton.args = {
  children: "카테고리",
  leadingIcon: "",
};
WithoutLeadingButton.parameters = {
  controls: { exclude: ["leadingIcon"] },
};