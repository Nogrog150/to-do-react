import Text from "./components/text";
import TrashIcon from "./assets/icons/trash.svg?react";
import Icon from "./components/icon"

function App() {
  return (
    <div className="grid gap-3">
      <div className="flex flex-col gap-1">
        <Text variant={"body-sm-bold"} className="text-pink-base">
          Olá mundo
        </Text>
        <Text className="text-green-base">
          Olá mundo
        </Text>
        <Text variant={"body-md-bold"}>
          Olá mundo
        </Text>
        <Text>Levar o dog para passear</Text>
      </div>

      <div className="flex gap-1">
        <Icon svg={TrashIcon} className="fill-pink-base"/>
      </div>
    </div>
  );
}

export default App;
