
import { memo, useState } from "react";
import React from "react";
import { Button } from "ui/components/controls/buttons/Button";
import { TextArea } from "ui/components/controls/inputs/TextArea";
import { TextField } from "ui/components/controls/inputs/TextField";
import { VStack } from "ui/components/shared/Stack";
import { Text } from "ui/components/shared/Text";
import { Window } from "ui/utils/Window";
import { Card } from "ui/widgets/shared/Card";

export const UITestInteg = memo(() => {
    const [window, setWindow] = useState(false);
    const [textFieldValue, setTextFieldValue] = useState('');
    const [textAreaValue, setTextAreaValue] = useState('');
    return (
        <div>
            <Button onClick={() => setWindow(true)}>
                <Text>Open window</Text>
            </Button>

            <Window 
                isOpen={window}
                onClose={() => setWindow(false)}
                fullscreen
                sidebar={ [
                    { desciption: <Text font="xl">Link 1</Text>, onClick: () => {} },
                    { desciption: <Text font="xl">Link 2</Text>, onClick: () => {} },
                    { desciption: <Text font="xl">Link 3</Text>, onClick: () => {} },
                ]}
                content={
                    <Card>
                        <VStack max gap="8">
                            <TextField 
                                value={textFieldValue}
                                onChange={setTextFieldValue}
                                label="TextField"
                                limit={100}
                                masked
                            />
                            <TextArea 
                                value={textAreaValue}
                                onChange={setTextAreaValue}
                                label="TextArea"
                                limit={64}
                            />

                            <Button fullWidth><Text>Send</Text></Button>
                        </VStack>
                    </Card>
                }
                lazy
            />
        </div>
    );
});