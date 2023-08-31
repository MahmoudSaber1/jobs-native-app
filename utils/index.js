import { Share } from 'react-native';

export const checkImageURL = (url) => {
	if (!url) return false;
	else {
		const pattern = new RegExp('^https?:\\/\\/.+\\.(png|jpg|jpeg|bmp|gif|webp)$', 'i');
		return pattern.test(url);
	}
};

export const onShare = async (jobUrl) => {
	try {
		const result = await Share.share({
			message: jobUrl,
		});
		if (result.action === Share.sharedAction) {
			if (result.activityType) {
				// shared with activity type of result.activityType
			} else {
				// shared
			}
		} else if (result.action === Share.dismissedAction) {
			// dismissed
		}
	} catch (error) {
		Alert.alert(error.message);
	}
};
