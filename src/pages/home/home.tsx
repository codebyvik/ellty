import { useState } from "react";
import { listData } from "../../constants/list-data";
import { ListItemType } from "../../types/list-type";
import ListItem from "../../components/list-item/list-item";
import Button from "../../components/button/button";
import "./home-style.css";

const Home = () => {
  const [selectedItemList, setSelectedItemList] = useState<ListItemType[]>([]);

  const toggleSelectAll = () => {
    if (selectedItemList.length === listData.length) {
      // Unselect all
      setSelectedItemList([]);
    } else {
      // select all
      setSelectedItemList([...listData]);
    }
  };

  const toggleSelectedItem = (selectedItem: ListItemType) => {
    const itemDetails = selectedItemList.find((item) => item.id == selectedItem.id);
    if (itemDetails) {
      // remove it from selectedItem List
      setSelectedItemList((prev) => prev.filter((item) => item.id !== selectedItem.id));
    } else {
      // Add it to selectedItem List
      setSelectedItemList((prev) => [...prev, { ...selectedItem }]);
    }
  };

  return (
    <div className="home-container">
      <div className="list-container">
        <ListItem
          title="All Pages"
          onCheckboxClick={toggleSelectAll}
          isChecked={selectedItemList.length === listData.length}
        />
        <div className="horizontal-line-container ">
          <hr />
        </div>

        <div className="list-items-container">
          {listData.map((item) => (
            <ListItem
              title={item.title}
              onCheckboxClick={() => toggleSelectedItem(item)}
              key={item.id}
              isChecked={selectedItemList?.some((selectedItem) => selectedItem.id === item?.id)}
            />
          ))}
        </div>
        <div className="horizontal-line-container ">
          <hr />
        </div>
        <Button title="Done" />
      </div>
    </div>
  );
};

export default Home;
