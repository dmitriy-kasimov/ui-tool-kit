import React, { useCallback, useState } from "react";
import { Button } from "ui/components/controls/buttons/Button";
import { Card } from "ui/components/sections/Card";
import { Loader } from "ui/components/shared/Loader";
import { LoaderSize } from "ui/components/shared/Loader/types/LoaderProps";
import { Text, textColor, textFont, textSize } from "ui/components/shared/Text";
import { Modal } from "ui/utils/Modal";
import { Table } from "ui/widgets/Table";
import { TableBody } from "ui/widgets/Table/components/TableBody";
import { TableCaption } from "ui/widgets/Table/components/TableCaption";
import { TableContent } from "ui/widgets/Table/components/TableContent";
import { TableData } from "ui/widgets/Table/components/TableData";
import { TableHead } from "ui/widgets/Table/components/TableHead";
import { TableRow } from "ui/widgets/Table/components/TableRow";

const UITest = () => {
  
    const [isModal, setIsModal] = useState(false);

    const onCloseModal = useCallback(() => {
        setIsModal(false);
    }, []);

    const onShowModal = useCallback(() => {
        setIsModal(true);
    }, []);
    return (
        <Card>
            <Button
                onClick={onShowModal}
            >
                <Text>Show modal</Text>
            </Button>

            <Modal
                isOpen={isModal}
                onClose={onCloseModal}
                lazy
            >
                <Table>
                    <TableCaption>
                        <Text font={textFont.TITLE} size={textSize.SUBTITLE}>The vip players</Text>
                    </TableCaption>

                    <TableContent>
                      <TableHead>
                        <TableRow>
                        <TableData style={{display:'inline-flex', justifyContent:'center', width: 50}}><Text font={textFont.TITLE} size={textSize.REGULAR}>ID</Text></TableData>
                          <TableData style={{display:'inline-flex', justifyContent:'center', width: 200}}><Text font={textFont.TITLE} size={textSize.REGULAR}>Name</Text></TableData>
                          <TableData style={{display:'inline-flex', justifyContent:'center', width: 100}}><Text font={textFont.TITLE} size={textSize.REGULAR}>Rank</Text></TableData>
                          <TableData style={{display:'inline-flex', justifyContent:'center', width: 100}}><Text font={textFont.TITLE} size={textSize.REGULAR}>Score</Text></TableData>
                        </TableRow>
                      </TableHead>
                      <TableBody>
                      <Loader
                        size={LoaderSize.BIG}
                      >
                        <Text>Loading...</Text>
                      </Loader>
                      </TableBody>
                    </TableContent>
                </Table>
            </Modal>
        </Card>
  )
};

export default UITest;