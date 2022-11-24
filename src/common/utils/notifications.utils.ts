import { notification } from "antd";
import { ArgsProps } from "antd/lib/notification";

export const showNotificationInfo = (props: ArgsProps) => {
	notification["info"](props);
};

export const showNotificationSuccess = (props: ArgsProps) => {
	notification["success"](props);
};

export const showNotificationWarning = (props: ArgsProps) => {
	notification["warning"](props);
};

export const showNotificationError = (props: ArgsProps) => {
	notification["error"](props);
};

export interface IShowNotificationErrorPromisse {
	error?: any;
	message?: string;
	splitError?: boolean;
}

export const showNotificationErrorPromisse = ({
	error,
	message = "Error ao realizar operação!",
	splitError = false,
}: IShowNotificationErrorPromisse) => {
	if (splitError && Array.isArray(error?.response?.data?.message)) {
		error?.response?.data?.message.map((description: string) =>
			showNotificationError({
				message,
				description,
			})
		);
	} else
		showNotificationError({
			message,
			description: error?.response?.data?.message,
		});
};
