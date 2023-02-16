/* eslint-disable linebreak-style */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react/jsx-filename-extension */
import Header from '../components/Header';
import '../index.css';

export default {
  title: 'Header',
  component: Header,
};

function Template() {
  return <Header Background="blue" />;
}
function TemplateTwo() {
  return <Header Background="black" />;
}

export const Primary = Template.bind({});
export const Seconday = TemplateTwo.bind({});
