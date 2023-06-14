import {useState, useMemo} from 'react';
import {useAppSelector, useAppDispatch} from "../hooks/hook";
import Recipe from "../components/Recipe";
import MySelect from "../components/MySelect";
import {recipesActions} from '../store/recipesSlice';

const Recipes = () => {
    const recipes = useAppSelector(state => state.recipes.recipes);
    const dispatch = useAppDispatch();

    const [sort, setSort] = useState('');
    const [search, setSearch] = useState('');

    const setSelectedSort = (sort: string) => {
        setSort(sort);
        dispatch(recipesActions.sortRecipes(sort));
    }
    
    const searchedRecipes = useMemo(() => {
        return recipes.filter(recipe => recipe.title.includes(search) || recipe.ingredients.toString().toLowerCase().includes(search));
    }, [search, recipes]);

    return (
        <>
            <h1 className="recipes__heading">Cook. Create. Devour.</h1>
            <section className="recipes__filter"> 
                <input value={search} onChange={e => setSearch(e.target.value)} placeholder="Search by name" className="login__input" /> 
                <MySelect value={sort} onChange={setSelectedSort} defaultValue="Sort by" options={[
                    {value: 'ascending', name: 'Sort by time cooking - ascending'},
                    {value: 'descending', name: 'Sort by time cooking - descending'},
                    {value: 'id', name: 'Sort by default'}
                ]} />
            </section> 
            <section className="recipes">
                {searchedRecipes.map((recipe) => 
                    <Recipe 
                        key={recipe.id} 
                        id={recipe.id}
                        title={recipe.title}
                        description={recipe.description}
                        img={recipe.img}
                    />
                )}
            </section>
        </>
    );
}

export default Recipes;