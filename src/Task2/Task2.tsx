import { Component } from "react";

class ClassCounter extends Component<ClassCounterProps> {
  componentDidUpdate(prevProps: ClassCounterProps) {
    if (prevProps.count !== this.props.count) {
      console.log(`Count has changed to: ${this.props.count}`);
    }
  }

  render() {
    const { count } = this.props;

    return <div>Count: {count}</div>;
  }
}

interface ClassCounterProps {
  count: number;
}

export default ClassCounter;
