import CollapseCard from "./CollapseCard";
export default function MayorFeed() {

    return (

        <CollapseCard name={'Mayor Twitter Feed'}>
            <a className="twitter-timeline" href="https://twitter.com/LondonBreed?ref_src=twsrc%5Etfw">Tweets by
                LondonBreed</a>
            <script async src="https://platform.twitter.com/widgets.js" charSet="utf-8"></script>
        </CollapseCard>
    )
}