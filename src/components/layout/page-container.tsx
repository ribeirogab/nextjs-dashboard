import { ScrollArea } from '@/components/ui/scroll-area';

export const PageContainer = ({
  children,
  scrollable = true,
}: {
  children: React.ReactNode;
  scrollable?: boolean;
}) => {
  return (
    <>
      {scrollable ? (
        <ScrollArea className="h-[calc(100dvh-52px)]">
          <div className="h-full p-4 md:px-6">{children}</div>
        </ScrollArea>
      ) : (
        <div className="h-full p-4 md:px-6">{children}</div>
      )}
    </>
  );
};
