import parse from '../../pseudocode/parse';

export default parse(`
\\Code{
    Main
    DFS(G, s) // Given a graph G find a path from start node s to an
            // end node.  It is assumed the end node(s) are defined
            // separately; if there are no end nodes, paths to all connected
            // nodes are found. Nodes are numbered 1..nmax. Returns the Parent
            // array, which gives the previous node in the path from s to the
            // node i (if one has been found; Parent[i] = 0 otherwise).
    \\In{
        initialise, with fontier={s}, stored in Nodes \\Ref Init
        while Nodes not empty
        \\In{
            remove next node n from Nodes and finalise it \\Ref Next_node
            // The Parent of n has now been determined
            if task_completed(n) \\Ref Completed
            \\Expl{ If there are no end nodes the whole connected component
                   of G will be explored and we can skip this "if".
            \\Expl}
            \\In{
                return
                \\Expl{ If there may be several end nodes we may want to
                       return which one is found as well as the Parent array.
                \\Expl}
            \\In}
            for each node m neighbouring n // G has edge from n to m
            \\In{
                update Nodes, Parent etc with n & m \\Ref UpdateNodes
            \\In}
        \\In}
        return
        \\Expl{ The whole component of the graph connected to s has been
                explored. If we were searching for an end node we have failed
                and some indication of this should be returned.
        \\Expl}
    \\In}
    \\Code}
    
    \\Code{
    Init
        initialise each element of array Parent to zero
        initialise each element of Finalised to False
        Nodes <- stack containing just s
    \\Code}
    
    \\Code{
    Next_node
        n <- pop(Nodes) // pop n from the top of the Nodes stack
        while Finalised[n] // ignore finalised nodes
        \\Expl{ The Nodes stack can have finalised nodes, which must be
            ignored to avoid repeated search.
        \\Expl}
        \\In{
            if Nodes is empty // need to check this before popping a node
            \\In{
                return
                \\Expl{ The whole component of the graph connected to s has been
                    explored. If we were searching for an end node we have failed
                    and some indication of this should be returned.
                \\Expl}
            \\In}
            n <- pop(Nodes) // pop n from the top of the Nodes stack
        \\In}
        Finalised[n] <- True  // n is now finalised
    \\Code}
    
    \\Code{
    Completed
        if is_end_node(n)
        \\Expl{ If we were searching for an end node we have succeeded!
            If we just want to traverse the whole graph component connected
            to s, we can skip this "if".
        \\Expl}
    \\Code}
    
    
    \\Code{
    UpdateNodes
        if not Finalised[m]
        \\Expl{ This is not strictly necessary but it saves pushing finalised
            nodes onto the Nodes stack and ignoring them later.
        \\Expl}
        \\In{
            Parent[m] <- n
            push(Nodes, m) // add m to top of Nodes stack
        \\In}
    \\Code}
`);