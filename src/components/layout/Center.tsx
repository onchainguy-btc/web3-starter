type Props = {
  children: React.ReactNode | React.ReactNode[];
  id?: string;
};

export const Center = ({ children, id }: Props) => {
  return (
    <div
      className="flex flex-col items-center justify-center min-h-screen"
      id={id}
    >
      {children}
    </div>
  );
};
