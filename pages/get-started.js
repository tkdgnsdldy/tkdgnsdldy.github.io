import Nav from '../components/nav';

export default () => {
    return (<>
        <Nav />
        <div className="container">
            <h1>시작하기</h1>

            <p>npm을 통해 CLi를 설치합니다.</p>

            <code>
                npm i -g codelab-2nd-cli
            </code>
        </div>
        
    </>
    )
}