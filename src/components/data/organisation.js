import useSWR from 'swr'

// const fetcher = (url) => fetch(url).then(res => res.json())
const fetcher = (...args) => fetch(...args).then(res => res.json())

export default function useOrganisationsQuery(url) {
    const { data, error,isLoading } = useSWR(url,fetcher)

    return {
        data,error,isLoading
    }
}
