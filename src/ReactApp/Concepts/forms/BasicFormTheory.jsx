import DemoBlock from "../../../Preview/DemoBlock";
import BasicForm from "./BasicForm";
import basicFormCode from "./BasicForm?raw";

const BasicFormTheory = () => {
  return (
    <DemoBlock
      title="Basic Form"
      preview={<BasicForm />}
      files={{
        "src/BasicForm.js": basicFormCode
      }}
    />
  );
};

export default BasicFormTheory;
