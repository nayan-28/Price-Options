import PropTypes from "prop-types";
import PriceOption from "../PriceOption/PriceOption";
const PriceOptions = () => {
  const priceOption = [
    {
      id: 1,
      name: "Basic Membership",
      price: 29.99,
      features: [
        "Access to cardio area",
        "Basic workout equipment usage",
        "Locker room access",
      ],
    },
    {
      id: 2,
      name: "Standard Membership",
      price: 49.99,
      features: [
        "Access to cardio and strength training areas",
        "Full range of workout equipment usage",
        "Group fitness classes",
        "Locker room access",
      ],
    },
    {
      id: 3,
      name: "Premium Membership",
      price: 79.99,
      features: [
        "Unlimited access to all gym facilities",
        "Personalized workout plans",
        "Priority scheduling for group fitness classes",
        "Sauna and spa access",
        "Towel service",
        "Locker room access",
      ],
    },
  ];

  return (
    <div>
      <h2 className="text-5xl">Best Prices in the town</h2>
      {priceOption.map((option) => (
        <PriceOption key={option.id} option={option}></PriceOption>
      ))}
    </div>
  );
};

export default PriceOptions;
