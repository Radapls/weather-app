import useWeather from "../hooks/useWeather";
import Form from "./Form";
import Result from "./Result";

export default function AppWeather()
{
    const { result }: any = useWeather()

    return (
        <>
            <main className="two-col">
                <Form />

                {result?.name &&
                    <Result />
                }
            </main>
        </>
    )
}
