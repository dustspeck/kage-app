import {StyleSheet} from 'react-native';

export const CommonStyles = StyleSheet.create({
  container: {padding: 18},
  text: {
    color: '#1e1e1e',
  },
  heading: {
    color: '#2e2e2e',
    fontSize: 30,
    fontWeight: 'bold',
    marginTop: 10,
  },
  sub_heading: {
    color: '#2e2e2e',
    fontSize: 22,
    marginBottom: 30,
  },
  button: {
    margin: 10,
  },
});

export const LoaderStyles = StyleSheet.create({
  container: {
    margin: 'auto',
    display: 'flex',
    height: '100%',
    width: '100%',
  },
});

export const Colors = {
  primary: '#1abc9c',
  secondary: '#BDC3C7',
  inactive: '#8a8a8a77',
  card_background: '#FFFBFE',
};
