var Feed = (props) => (
  const populateFeed = props.updates.map(update =>
    <FeedUpdates onFeedUpdateClick={props.onFeedUpdateClick}
    key={update.id}
    update={update} />
  )

  return (
    <div className="feedUpdates">
      {populateFeed}
    </div>
  )
); 

// onFeedUpdateClick should allow users to click on each update 
// to do either chat with a group

// React proptypes declare what is the expected input of a prop
// Console will display warnings when violated
Feed.proptypes = {
  updates: React.proptypes.array.isRequired;
}

window.Feed = Feed;