const theme = {
  chipsContainer: {
    display: "flex",
    position: "relative",
    borderBottom: "1px solid #ABABAB",
    backgroundColor: '#fff',
    minHeight: 24,
    padding: 4,
    alignItems: "center",
    flexWrap: "wrap",
    ':focus': {
      borderBottom: "1px solid #ABABAB",
    }
  },
  container: {
    flex: 1,
  },
  containerOpen: {

  },
  input: {
    border: 'none',
    outline: 'none',
    boxSizing: 'border-box',
    width: '100%',
    padding: 5,
    margin: 2.5,
    fontSize: 'inherit',
    fontWeight: 500,
  },
  suggestionsContainer: {

  },
  suggestionsList: {
    position: 'absolute',
    border: '1px solid #ccc',
    zIndex: 10,
    left: 0,
    top: '100%',
    width: '100%',
    backgroundColor: '#fff',
    listStyle: 'none',
    padding: 0,
    margin: 0,
  },
  suggestion: {
    padding: '5px 15px'
  },
  suggestionHighlighted: {
    background: '#ddd'
  },
  sectionContainer: {

  },
  sectionTitle: {

  },
}

export default theme;

export const chipTheme = {
  chip: {
    padding: "4px 12px",
    background: "#915591",
    margin: "2.5px",
    borderRadius: 18,
    cursor: 'default',
    color: '#fff'
  },
  chipSelected: {
    background: '#888',
  },
  chipRemove: {
    fontWeight: "bold",
    cursor: "pointer",
    ':hover': {
      color: 'red',
    }
  }
}