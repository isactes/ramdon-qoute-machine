import PropTypes from  'prop-types'

function CardQoute(props) {
  return(
    <>
    <div id="quote-box" className="block rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
      <div id="author" className="border-b-2 border-neutral-100 px-6 py-3 dark:border-neutral-600 dark:text-neutral-50">
        {props.author}
      </div>
      <div className="p-6">
        <h5 className="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">{props.title}</h5>
        <p id="text" className="mb-4 text-base text-neutral-600 dark:text-neutral-200">
          {props.text}
        </p>
        <div className="flex justify-around">
        <button
        id="new-quote"
        type='button'
        className="inline-block rounded bg-primary px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
        data-te-ripple-init
        data-te-ripple-color="light"
        onClick={props.newQoute}
        >
          New Ramdon Qoute
        </button>
        <a
        id="tweet-quote"
        type="button"
        href="https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text"
        className="pointer-events-auto inline-block cursor-pointer rounded text-base font-normal leading-normal text-primary transition duration-150 ease-in-out hover:text-primary-600 focus:text-primary-600 focus:outline-none focus:ring-0 active:text-primary-700"
        target='_blank'
        >
          Repost
          </a>
        </div>
      </div>
    </div>
    </>
  )
}

CardQoute.propTypes = {
  author: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  newQoute: PropTypes.func.isRequired,
  linka: PropTypes.string,
  title: PropTypes.string
}

export default CardQoute
