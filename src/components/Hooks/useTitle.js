import { useEffect } from "react";

const useTitle = (title) => {
    useEffect( () => {
        document.title = `${title} - Movie Mania`;
    }, [title])
}
export default useTitle;