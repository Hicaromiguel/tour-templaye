interface QuantityStepperProps {
  value: number;
  onChange: (value: number) => void;
}

export default function QuantityStepper({ value, onChange }: QuantityStepperProps) {
  function Decrease() {
    if (value > 1) {
      onChange(value - 1);
    }
  }

  function Increase() {
    onChange(value + 1);
  }

  return (
    <div className="stepper">
      <button type="button" className="stepperButton" onClick={Decrease} aria-label="Diminuir quantidade">
        −
      </button>
      <span className="stepperValue">{value}</span>
      <button type="button" className="stepperButton" onClick={Increase} aria-label="Aumentar quantidade">
        +
      </button>
    </div>
  );
}
