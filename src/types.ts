export interface IRecipe {
    id: number;
    title: string;
    description: string;
    ingredients: string[];
    instruction: string[];
    time: number;
    img: string;
    isFavorite: boolean;
    isSaved: boolean;
}
export interface IOption {
    name: string;
    value: string;
}
export interface ISelect {
    defaultValue: string;
    options: IOption[];
    value: string;
    onChange: (str: string) => void;
}
export interface IAuthentication {
    email: string;
    password: string;
}
export interface IRecipeProps {
    id: number;
    title: string;
    description: string;
    img: string;
}