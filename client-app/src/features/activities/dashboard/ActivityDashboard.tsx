import { Grid } from "semantic-ui-react";
import { Activity } from "../../../app/models/activtiy";
import ActivityDetails from "../details/ActivityDetails";
import ActivtiyForm from "../form/ActivityForm";
import ActivityList from "./ActivityList";
interface Props {
    activities: Activity[];
    selectedActivity: Activity | undefined;
    selectActivity: (id: string) => void;
    cancelSelectActivty: () => void;
    editMode: boolean;
    openForm: (id: string) => void;
    closeForm: () => void;
    createOrEdit: (activity: Activity) => void;
    deleteActivity: (id: string) => void;
    submitting: boolean;


}

export default function ActivityDashboard({ activities, selectActivity,
    selectedActivity, cancelSelectActivty,
    editMode, openForm, closeForm, createOrEdit, deleteActivity, submitting }: Props) {
    return (
        <Grid>
            <Grid.Column width='10'>
                <ActivityList activities={activities}
                    selectActivity={selectActivity}
                    deleteActivity={deleteActivity}
                    submitting={submitting}
                />
            </Grid.Column>
            <Grid.Column width='6'>
                {selectedActivity && !editMode &&
                    <ActivityDetails activity={selectedActivity}
                        cancelSelectActivity={cancelSelectActivty}
                        openForm={openForm}

                    />}
                {editMode &&
                    <ActivtiyForm closeForm={closeForm}
                        activity={selectedActivity}
                        createOrEdit={createOrEdit}
                        submitting={submitting}
                    />}
            </Grid.Column>
        </Grid>
    )
}