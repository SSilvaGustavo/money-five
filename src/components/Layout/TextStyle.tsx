interface ParagraphProps {
  children: React.ReactNode;
  className?: string;
}

interface TitleProps {
  title: string;
  className?: string;
}

function TextTitle({ title, className }: TitleProps) {
  return (
    <h2 className={`font-bold text-xl lg:text-xl text-white ${className}`}>
      {title}
    </h2>
  );
}

function TextHeading({ title, className }: TitleProps) {
  return (
    <h1 className={`font-bold text-4xl text-slate-200 ${className}`}>
      {title}
    </h1>
  );
}

function TextParagraph({ children, className }: ParagraphProps) {
  return (
    <p
      className={`text-slate-300 font-medium leading-normal tracking-tight text-lg lg:text-base ${className}`}
    >
      {children}
    </p>
  );
}

export const TextStyle = {
  Title: TextTitle,
  Heading: TextHeading,
  Paragraph: TextParagraph,
};
