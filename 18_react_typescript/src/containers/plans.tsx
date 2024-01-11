import { Card } from "../components/card";
import { CardOptions } from "../components/card-options";

export const PlanContainer = () => {
  return (
    <div className="p-8 bg-slate-800 flex gap-x-6 justify-center">
      <Card
        title="Essentials"
        price={49}
        listTitle="Features include"
        list={[
          <CardOptions text="50 Placeholder text commonly" />,
          <CardOptions text="Consectetur adipiscing elit" />,
          <CardOptions text="Excepteur sint occaecat cupidatat" />,
          <CardOptions text="Officia deserunt mollit anim" />,
        ]}
      />
      <Card
        title="Premium"
        price={79}
        listTitle="All features of Essential plus"
        list={[
          <CardOptions text="100 placeholder text commonly" />,
          <CardOptions text="Consectetur adipiscing elit" />,
          <CardOptions text="Excepteur sint occaecat cupidatat" />,
          <CardOptions text="Officia deserunt mollit anim" />,
          <CardOptions text="Placeholder text commonly used" />,
        ]}
      />
      <Card
        title="Advanced"
        price={129}
        listTitle="All features of Essential plus"
        list={[
          <CardOptions text="200 Placeholder text commonly" />,
          <CardOptions text="Consectetur adipiscing elit" />,
          <CardOptions text="Excepteur sint occaecat cupidatat" />,
          <CardOptions text="Officia deserunt mollit anim" />,
          <CardOptions text="Voluptate velit esse cillum" />,
          <CardOptions text="Placeholder text commonly used" />,
        ]}
      />
    </div>
  );
};
