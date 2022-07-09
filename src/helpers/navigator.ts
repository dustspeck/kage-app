import {
  CommonActions,
  NavigationProp,
  StackActions,
  useNavigation,
} from '@react-navigation/native';
import {Linking} from 'react-native';
import {IOnPress} from '../types/navigator/screen';

export const handleNavigation = async ({
  onPress,
  navigation,
}: {
  onPress: IOnPress;
  navigation: NavigationProp<any, any>;
}) => {
  if (onPress.type === 'url') {
    if (onPress.props.url) {
      const canOpen = await Linking.canOpenURL(onPress.props.url);
      if (canOpen) {
        Linking.openURL(onPress.props.url);
      }
    }
  } else if (onPress.type === 'navigation') {
    if (onPress.props.to && onPress.props.method) {
      if (onPress.props.method === 'navigate') {
        navigation.dispatch({
          ...CommonActions.navigate(`${onPress.props.to}`, onPress.props.props),
        });
      } else if (
        onPress.props.method === 'push' ||
        onPress.props.method === 'replace'
      ) {
        navigation.dispatch({
          ...StackActions[`${onPress.props.method}`](
            `${onPress.props.to}`,
            onPress.props.props,
          ),
        });
      }
    }
  }
};
