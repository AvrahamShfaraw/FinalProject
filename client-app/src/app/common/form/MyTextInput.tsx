import { useField } from "formik";
import { Form, Label } from "semantic-ui-react";

interface Props {
    placeholder: string;
    name: string;
    type?: string
    label?: string;
}

export default function MyTextInput(proprs: Props) {
    const [field, meta] = useField(proprs.name)



    return (
        <Form.Field error={meta.touched && !!meta.error}>
            <label>{proprs.label}</label>
            <input  {...field} {...proprs} />
            {meta.touched && meta.error ? (
                <Label basic color='red'>{meta.error}</Label>
            ) : null}
        </Form.Field>

    )
}