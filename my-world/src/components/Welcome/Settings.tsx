import { useSelector, useDispatch } from "react-redux";
import { RootState } from "modules";
import { setColor } from "modules/SettingReducer";
import "components/Welcome/welcome.scss";
export const Settings = () => {
  const { color } = useSelector((state: RootState) => state.SettingReducer);
  const dispatch = useDispatch();
  const onChangeColor = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setColor(e.currentTarget.value));
  };

  return (
    <section className="settings">
      <input type="color" onChange={onChangeColor} defaultValue={color} />
      <div>This is new new Modal</div>
    </section>
  );
};
