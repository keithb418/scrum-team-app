import { connect } from "react-redux";
import TeamMember from "../components/TeamMember";

const mapStateToProps = (state, ownProps) => {
    return state.teamMembers.find((teamMember) => { 
        return teamMember._id === ownProps.id;
    });
};

const mapDispatchToProps = (dispatch, ownProps) => ({
    onClick: () => {
        dispatch({
            type: "SHOW_DETAILS",
            id: ownProps.id
        });
    },
    onEdit: () => {
        dispatch({
            type: "EDIT_DETAILS",
            id: ownProps.id
        });
    }
});

const TeamMemberContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(TeamMember);

export default TeamMemberContainer;