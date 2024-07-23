function ParticipationStep({ step, detail }) {
  return (
    <div className="text-white">
      <h3 className="text-[20px] leading-[60px] font-semibold">{step}</h3>
      <ul className="list-disc pl-5">
        <li className="font-light text-lg leading-[60px]">{detail}</li>
      </ul>
    </div>
  );
}

export default ParticipationStep;
