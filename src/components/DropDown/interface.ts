
export interface DropDownProps {
    itemType: string;
    handleSelect: (eventKey: string) => void;
    items: Array<string | { Наименование: string }>;
    label: string;
    type: string;
}