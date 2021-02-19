import React, {useEffect} from 'react';
import {TrainingPage} from "./TrainingPage";
import {connect} from "react-redux";
import {
	getInputText,
	getText, getTypingState
} from "../../../store/selectors/trainingSpeedSelectors";
import {bindActionCreators} from "redux";
import {setEndState, setIdleState} from "../../../store/actionCreators/trainingSpeedActionCreators";
import io from 'socket.io-client'
import {disconnectSocket} from "../../../store/actionCreators/socketActionCreators";


const TrainingPageContainer = (props) => {

	const hasError = !props.text.startsWith(props.inputText);

	if(props.state.TYPING && props.text === props.inputText) {
		props.setEndState();
	}


	useEffect(() => {
		props.setIdleState();
		return () => {
			props.disconnectSocket();
			props.setIdleState();
		}
	}, []);

	return (
		<TrainingPage
			hasError={hasError}
			state={props.state}
		/>
	);
}


const mapStateToProps = state => {
	return {
		text: getText(state),
		inputText: getInputText(state),
		state: getTypingState(state)
	}
}

const mapDispatchToProps = dispatch => {
	return {
		disconnectSocket: bindActionCreators(disconnectSocket, dispatch),
		setEndState: bindActionCreators(setEndState, dispatch),
		setIdleState: bindActionCreators(setIdleState, dispatch)
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(TrainingPageContainer);