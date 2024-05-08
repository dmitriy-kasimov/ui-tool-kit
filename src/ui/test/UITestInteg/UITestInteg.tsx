
import { memo, useState } from "react";
import React from "react";
import { Button } from "ui/components/controls/buttons/Button";
import { TextArea } from "ui/components/controls/inputs/TextArea";
import { TextField } from "ui/components/controls/inputs/TextField";
import { HStack, VStack } from "ui/components/shared/Stack";
import { Text } from "ui/components/shared/Text";
import { Window } from "ui/utils/Window";
import { PostType, Tape } from "ui/widgets/information/Tape";
import { Card } from "ui/widgets/shared/Card";

const posts: PostType[] = [
    {id: '1', title: 'The server was started!', subtitle: '10/04/2024', description: (
      <VStack max gap="4">
        <Text font='s' >Font type S (Nunito Sans). Use for texts.</Text>
        <Text font='s' bold>Font type S (Nunito Sans). Use for texts (bold).</Text>
        <Text font='m' >Font type M (Nunito Sans). Use for texts.</Text>
        <Text font='m' bold>Font type M (Nunito Sans). Use for texts (bold).</Text>
        <Text font='l' >Font type L (Roboto). Use for titles.</Text>
        <Text font='l' bold>Font type L (Roboto). Use for titles (bold).</Text>
        <Text font='xl' >Font type XL (Roboto). Use for titles.</Text>
        <Text font='xl' bold>Font type XL (Roboto). Use for titles (bold).</Text>
      </VStack>
    )},
    {id: '2', title: 'As soon as possible', subtitle: '09/29/2024', description: (
      <VStack max gap="4">
        <Text font='s' >The semanthic of colors</Text>
        <Text font='s' bold>The semanthic of colors</Text>
        <Text font='m' >The semanthic of colors</Text>
        <Text font='m' bold>The semanthic of colors</Text>
        <Text font='l' >The semanthic of colors</Text>
        <Text font='l' bold>The semanthic of colors</Text>
        <Text font='xl' >The semanthic of colors</Text>
        <Text font='xl' bold>The semanthic of colors</Text>
      </VStack>
    )},
    {id: '3', title: 'The most part was created!', subtitle: '04/29/2024', description: (
      <VStack max gap="4">
        <Text color="secondary" font='s' >The semanthic of colors</Text>
        <Text color="secondary" font='s' bold>The semanthic of colors</Text>
        <Text color="secondary" font='m' >The semanthic of colors</Text>
        <Text color="secondary" font='m' bold>The semanthic of colors</Text>
        <Text color="secondary" font='l' >The semanthic of colors</Text>
        <Text color="secondary" font='l' bold>The semanthic of colors</Text>
        <Text color="secondary" font='xl' >The semanthic of colors</Text>
        <Text color="secondary" font='xl' bold>The semanthic of colors</Text>
      </VStack>
    )},
    {id: '4', title: 'The all developments stopped', subtitle: '11/20/2021', description: (
      <VStack max gap="4">
        <Text color="warning" font='s' >The semanthic of colors</Text>
        <Text color="warning" font='s' bold>The semanthic of colors</Text>
        <Text color="warning" font='m' >The semanthic of colors</Text>
        <Text color="warning" font='m' bold>The semanthic of colors</Text>
        <Text color="warning" font='l' >The semanthic of colors</Text>
        <Text color="warning" font='l' bold>The semanthic of colors</Text>
        <Text color="warning" font='xl' >The semanthic of colors</Text>
        <Text color="warning" font='xl' bold>The semanthic of colors</Text>
      </VStack>
    )},
];

export const UITestInteg = memo(() => {
    const [window, setWindow] = useState(false);
    const [name, setName] = useState('');
    const [pass, setPass] = useState('');
    const [confirmPass, setConfirmPass] = useState('');
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
                    { desciption: <Text font="l">Link1</Text>, onClick: () => {} },
                    { desciption: <Text font="l">Link2</Text>, onClick: () => {} },
                    { desciption: <Text font="l">Link3</Text>, onClick: () => {} },
                ]}
                content={
                    <Card>
                        <HStack max gap="32">
                            <Tape 
                                title="The latest news"
                                posts={posts}
                            />
                            <VStack max gap="32">
                                <VStack max gap="8">
                                    <TextField 
                                        value={name}
                                        onChange={setName}
                                        label="Nickname"
                                        limit={32}
                                    />
                                    <TextField 
                                        value={pass}
                                        onChange={setPass}
                                        label="Password"
                                        limit={100}
                                        masked
                                    />
                                    <TextField 
                                        value={confirmPass}
                                        onChange={setConfirmPass}
                                        label="Confirm password"
                                        limit={100}
                                        masked
                                    />  
                                </VStack>
                                <Button fullWidth><Text>Continue</Text></Button>
                            </VStack>
                        </HStack>   
                    </Card>
                }
                lazy
            />
        </div>
    );
});