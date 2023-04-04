import useWeather from "../hooks/useWeather";
import Form from "./Form";
import Loading from "./Loading";
import Result from "./Result";

export default function AppWeather()
{
    const { result, loading, noResults }: any = useWeather()

    return (
        <>
            <main className="two-col">
                {<Form />}

                {loading ? <Loading /> :
                    result?.name ? <Result /> :
                        noResults ? <p>{noResults}</p> :
                            <p>The weather will come here</p>
                }
            </main>
        </>
    )
}
