import { useLoaderData } from "react-router-dom";

export const githubInfoLoader = async () => {
    const username = "vinaynoogler000";
    const resp = await fetch(`https://api.github.com/users/${username}`);
    return await resp.json();
}   

export default function GitHub() {
    const data = useLoaderData();
    // const [data, setData] = useState({});
    // const username = "vinaynoogler000";

    // useEffect(() => {
    //     fetch(`https://api.github.com/users/${username}`)
    //         .then((response) => response.json())
    //         .then((data) => {
    //             setData(data);
    //         })
    //         .catch((error) => console.error('Error fetching GitHub followers:', error));
    // }, []);    

    return (
        <div className="text-center m-4 bg-gray-600 text-white p-4 text-3xl grid place-items-center gap-4">
            GitHub Followers: {data?.followers}
            <img src={data.avatar_url} alt="GitHub Profile Picture" width={300}/>
        </div>
    );
}