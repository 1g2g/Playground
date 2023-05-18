import { SetLangType } from "components/Note/Code";

const LANGUAGE = ["javascript", "java", "python", "c", "c++", "kotlin"];

interface Props {
  lang: string;
  setLang: SetLangType;
}

export const SelectLanguage = (props: Props) => {
  return (
    <select
      defaultValue={props.lang}
      onChange={(e) => {
        props.setLang(e.currentTarget.value);
      }}
    >
      {LANGUAGE.map((l) => {
        return (
          <option value={l} key={l}>
            {l}
          </option>
        );
      })}
    </select>
  );
};
