import DemoBlock from "../../../Preview/DemoBlock";
import closureCode from "./Closure?raw";
const ClosuerPreview = () => {
  return (
    <div>
      <DemoBlock
        title="Basic Form"
        //   preview={<BasicForm />}
        files={{
          "src/closure.js": closureCode
        }}
      />
    </div>
  );
};

export default ClosuerPreview;
