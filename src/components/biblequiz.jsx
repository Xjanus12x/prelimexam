export default function BibleQuiz(props) {
    return <>
        <h1>Bible Quiz</h1>
        <h2>The Bible consist of the Old and New Testments.</h2>
        <h2 className={`${props.isCorrect1? 'text-green': 'text-red'} ${props.isHidden? 'hidden':''}`}>Correct!</h2>
        <h2>Moses led the Israelistas of Egypt</h2>
        <h2 className={`${props.isCorrect2? 'text-green': 'text-red'} ${props.isHidden? 'hidden':''}`}>Correct!</h2>
        <h2>The Sermon on the Mount is found in the Book of Luke.</h2>
        <h2 className={`${props.isCorrect3? 'text-green': 'text-red'} ${props.isHidden? 'hidden':''}`}>Incorrect!</h2>
    </>
}