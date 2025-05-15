import HeaderBar from '~/app/_baseComponents/headerBar';
import SubToolbar from '~/app/_baseComponents/subToolbar';
import ViewFilterToolbar from '~/app/_baseComponents/viewFilterToolbar';
import SidePanel from '~/app/_baseComponents/sidePanel';
import GridSheet from '~/app/_baseComponents/table';

export default function AirtableClone() {
  return (
    <div className="flex flex-col h-screen w-full text-[13px] leading-none">
      <HeaderBar />
      <SubToolbar />
      <ViewFilterToolbar />
      <div className="flex flex-1 overflow-hidden">
        <SidePanel />
        <GridSheet />
      </div>
    </div>
  );
}