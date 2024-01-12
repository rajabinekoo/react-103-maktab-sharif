import { Card, Card2 } from "../components/card";
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
          "200 Placeholder text commonly",
          "Consectetur adipiscing elit",
          "Excepteur sint occaecat cupidatat",
          "Officia deserunt mollit anim",
          "Voluptate velit esse cillum",
          "Placeholder text commonly used",
        ].map((text, index) => <CardOptions key={index} text={text}/>)}
      />
    </div>
  );
};

// List solution
export const PlanContainer2 = () => {
  return (
    <div className="p-8 bg-slate-800 flex gap-x-6 justify-center">
      <Card2
        title="Essentials"
        price={49}
        listTitle="Features include"
        list={[
          "50 Placeholder text commonly",
          "Consectetur adipiscing elit",
          "Excepteur sint occaecat cupidatat",
          "Officia deserunt mollit anim",
        ]}
      />
      <Card2
        title="Premium"
        price={79}
        listTitle="All features of Essential plus"
        list={[
          "100 placeholder text commonly",
          "Consectetur adipiscing elit",
          "Excepteur sint occaecat cupidatat",
          "Officia deserunt mollit anim",
          "Placeholder text commonly used",
        ]}
      />
      <Card2
        title="Advanced"
        price={129}
        listTitle="All features of Essential plus"
        list={[
          "200 Placeholder text commonly",
          "Consectetur adipiscing elit",
          "Excepteur sint occaecat cupidatat",
          "Officia deserunt mollit anim",
          "Voluptate velit esse cillum",
          "Placeholder text commonly used",
        ]}
      />
    </div>
  );
};
