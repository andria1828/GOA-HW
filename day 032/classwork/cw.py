def duplicate_count(txt):
    txt = txt.lower()
    cc = {}
    for i in txt:
        if i in cc:
            cc[i] += 1
        else:
            cc[i] = 1
    d = 0
    for ccc in cc.values():
        if ccc > 1:
            d += 1 
    return d