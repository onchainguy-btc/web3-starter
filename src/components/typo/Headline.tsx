type Props = {
  children: React.ReactNode;
};

export const Headline = ({ children }: Props) => (
  <h1 className="font-bold text-2xl">{children}</h1>
);
