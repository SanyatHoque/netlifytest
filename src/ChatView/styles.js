const styles = theme => ({

  content: {
    height: 'calc(100vh - 100px)',
    overflow: 'auto',
    padding: '25px',
    marginLeft: '300px',
    boxSizing: 'border-box',
    overflowY: 'scroll',
    top: '50px',
    width: 'calc(100% - 300px)',
    position: 'absolute'
  },

  userSent: {
    float: 'left',
    clear: 'both',
    padding: '20px',
    // boxSizing: 'border-box',
    wordWrap: 'break-word',
    marginTop: '10px',
    backgroundColor: 'orange',
    color: 'black',
    width: '300px',
    // borderRadius: '20px 10px'
    borderRadius: '40%'
  },

  friendSent: {
    float: 'right',
    clear: 'both',
    padding: '20px',
    boxSizing: 'border-box',
    wordWrap: 'break-word',
    marginTop: '10px',
    backgroundColor: 'pink',
    color: 'black',
    width: '300px',
    // borderRadius: '20px 10px'
    borderRadius: '40%'
  },

  chatHeader: {
    width: 'calc(100% - 301px)',
    height: '50px',
    backgroundColor: 'yellow',
    position: 'fixed',
    marginLeft: '301px',
    fontSize: '18px',
    textAlign: 'center',
    color: 'gold',
    paddingTop: '10px',
    boxSizing: 'border-box'
  }

});

export default styles;